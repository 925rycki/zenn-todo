'use strict'

const onClickAdd = () => {
  //入力したテキストを取得し、初期化する
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";

  // liタグを生成する
  const li = document.createElement("li");

  // pタグを生成する
  const p = document.createElement("p");
  p.innerText = inputText;

  // 完了ボタンを生成する
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // 押下されたターゲットにcompletedクラスを付け外しする
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;
    completeTarget.classList.toggle("completed");
  });

  // 削除ボタンを生成する
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // 押下されたターゲットを削除する
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("todo-list").removeChild(deleteTarget);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // TODOリストに追加
  document.getElementById("todo-list").appendChild(li);
};

document
  .getElementById("input-button")
  .addEventListener("click", () => onClickAdd());
