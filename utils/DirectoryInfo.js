const path = require('path');
const fs = require('fs');
const { basename } = require('path');

const isDirectory = source => fs.lstatSync(source).isDirectory();
const isFile = source => fs.lstatSync(source).isFile();
const getDirectories = (p) => (
  fs.readdirSync(p)
    .filter(item => isDirectory(path.join(p, item)))
    .map(dir => `/${dir}`)
);
const getFiles = (p) => (
  fs.readdirSync(p)
    .filter(item => isFile(path.join(p, item)))
);
const filterImages = (files) => {
  return files.filter(file => imageExtensions.includes(path.extname(file)));
}

const imageExtensions = [
  ".png",
  ".gif",
  ".jpg",
  ".jpeg",
  ".svg",
  ".tiff",
  ".bmp"
];

/**
 * Simple prototype object that extracts useful information about the 
 * parameterized path.
 * 
 * Includes contained files, directories, and various methods
 * 
 * @param {*} path path to directory to be explored
 */
function DirectoryInfo(path, route) {
  this.route = route;
  this.files = getFiles(path);
  this.images = filterImages(this.files);
  this.directories = getDirectories(path);
  this.name = `/${basename(route)}`;
}

module.exports = DirectoryInfo;
