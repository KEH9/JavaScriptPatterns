function File(name) {
  this.name = name;
  this.type = 'file';
}

File.prototype.display = function (indent) {
  console.log(Array(indent++).join('--') + ' ' + this.name);
}

function Directory(name) {
  this.name = name;
  this.type = 'directory';
  this.files = [];
}

Directory.prototype.add = function (file) {
  this.files.push(file);
}

Directory.prototype.remove = function (file) {
  for (let i = 0, length = this.files.length; i < length; i++) {
      if (this.files[i] === file) {
          this.files.splice(i, 1);
          return true;
      }
  }
  
  return false;
}

Directory.prototype.getFileName = function (index) {
  return this.files[index].name;
}

Directory.prototype.display = function(indent) {
  console.log(Array(indent++).join('--') + ' ' + this.name);
  for (let i = 0, length = this.files.length; i < length; i++) {
    this.files[i].display(indent);
  }
}

root = new Directory('Root');

directoryOne = new Directory('Directory One');
directoryTwo = new Directory('Directory Two');
directoryThree = new Directory('Directory Three');
directoryFour = new Directory('Directory Four');

fileOne = new File('File One');
fileTwo = new File('File Two');
fileThree = new File('File Three');

root.add(directoryOne);
root.add(directoryTwo);
root.add(directoryThree);

directoryOne.add(fileOne);
directoryOne.add(fileTwo);
directoryOne.add(directoryFour);
directoryOne.add(fileThree);


directoryTwo.add(fileOne);

directoryThree.add(fileOne);
directoryThree.add(fileTwo);
directoryThree.add(fileThree);

root.display(1);
// directoryOne.display();
// directoryTwo.display();
// directoryThree.display();