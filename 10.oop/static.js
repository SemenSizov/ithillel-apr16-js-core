class Table {
  static tablesCount = 0
  constructor(height, width){
    this.height = height;
    this.width = width
    Table.tablesCount++
  }

  get area(){
    return this.width * this.height
  }

  static getTablesCount(){
    return Table.tablesCount
  }
}

const t1 = new Table(2,3)


console.log(t1.area);
console.log(Table.tablesCount)
const t2 = new Table(3,4)
console.log(t2.area);
console.log(Table.getTablesCount())

