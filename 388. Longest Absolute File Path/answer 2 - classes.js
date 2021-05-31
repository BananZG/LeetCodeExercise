// https://leetcode.com/problems/longest-absolute-file-path/
/**
 * @param {string} input
 * @return {number}
 */

class NodePath {
  constructor(level, path) {
    this.level = level;
    this.path = path;
    this.child = [];
  }

  isFile = () => this.path.indexOf('.') > 0;

  push = (targetLevel, path) => {
    const acceptableChildLevel = this.level + 1;
    if (targetLevel !== acceptableChildLevel) {
      if (targetLevel < acceptableChildLevel) {
        throw Error(`Unable to insert Node level (${targetLevel}) lower than current (${this.level}).`)
      }
      if (this.child.length <= 0) {
        throw Error(`Unable to insert Node level (${targetLevel}) as child of level (${this.level}) is empty`);
      }
      this.child[this.child.length - 1].push(targetLevel, path);
      return;
    }
    this.child.push(new NodePath(targetLevel, this.path.length ? `${this.path}/${path}` : path));
  }

  getAllFiles = () => {
    return [this, ...this.child.flatMap(e => e.getAllFiles())].filter(e => e.isFile());
  }
}

const lengthLongestPath = function (input) {
  let root = new NodePath(0, '');
  for (const path of input.split('\n')) {
    const current = path.split('\t');
    const level = current.length;
    const name = current[current.length - 1];
    root.push(level, name);
  }
  const files = root.getAllFiles().map(e => e.path);
  return Math.max(...files.map(e => e.length), 0);
};

// let ret = lengthLongestPath('dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext')
let ret = lengthLongestPath('"file1.txt\nfile2.txt\nlongfile.txt"')
console.log(ret);

