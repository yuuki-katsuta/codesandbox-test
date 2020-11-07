//モジュール全体をインポート
import "./styles.css";

const onClickAdd = () => {
  //valueでinputに入力された値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //リストの追加するための必要な要素を取得
  //divタグ生成
  const div = document.createElement("div");
  //divタグにクラス付与
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  //liタグにテキストを追加
  li.innerText = inputText;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert();
  });

  //削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert();
  });

  //divタグの子要素に各要素を設定 appendChild()
  //appendVhildはどんどん下に追加される
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //ul要素を取得してdiv要素を追加
  document.getElementById("incomplete-list").appendChild(div);
};

//add-button要素を取得しイベント追加
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", () => onClickAdd());
