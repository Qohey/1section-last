function load() {
    var MemoData = null;
    if (localStorage.length === 0) {
        alert('メモは登録されていません。');
        return;
    }
    else {
        var list = document.form.list;
        MemoData = localStorage.getItem('Memo' + list.selectedIndex)
        document.form.Memo.value = MemoData;
    }
}
// 保存
function save() {
    if (document.getElementById('Memo').value.length === 0) {
        alert('メモの内容がありません。');
        return;
    }
    var MemoData = document.form.Memo.value;
    localStorage.setItem('Memo' + localStorage.length, MemoData);
    if (document.getElementById('list') == null)
        createList();
    addList();
    alert('保存が完了しました。');
}

function createList() {
    var listPare = document.getElementById('listPare');
    var list = document.createElement('select');
    list.setAttribute('id', 'list');
    list.setAttribute('size', '1');
    listPare.appendChild(list);
}

function addList() {
    var list = document.getElementById('list');
    var option = document.createElement('option');
    option.setAttribute('value', document.form.Memo.value);
    option.innerText = 'メモ' + localStorage.length;
    list.appendChild(option);
    document.getElementById('list').setAttribute('size', localStorage.length);
}

function output() {
    if (document.getElementById('Memo').value.length === 0) {
        alert('メモの内容がありません。');
        return;
    }
    let blob = new Blob([document.getElementById('Memo').value], { type: "text/plan" });
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'メモファイル.txt';
    link.click();
}

function init() {
    localStorage.clear();
}
