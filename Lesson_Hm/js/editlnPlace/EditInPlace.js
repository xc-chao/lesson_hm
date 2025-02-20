/**
 * @func 就地编辑
 * @param {id, parent, value, 默认值}
 * @author xc
 * @date 2024-11-28 
 */
function EditInPlace(id, parent, value){
    // this 可以跨函数共享属性
    this.id = id || 'edit-in-place';
    this.parent = parent || document.body; // 如果parent没有传入，默认是body
    this.value = value || '这个家伙很懒，什么都没留下';
    this.createElement(this.id);
}
EditInPlace.prototype.createElement = function(id){
    // console.log(id);
    // <div id="ep1"></div>
    this.containerElement = document.createElement('div'); // 创建div元素
    this.containerElement.id = this.id; // 给div元素添加id
    this.parent.appendChild(this.containerElement); // 将div元素添加到body中

    this.staticElement = document.createElement('span'); // 创建span元素
    this.staticElement.innerText = this.value; // 给span元素添加文本
    this.containerElement.appendChild(this.staticElement); // 将span元素添加到div元素中
}