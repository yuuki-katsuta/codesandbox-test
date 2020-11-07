//モジュール全体をインポート
import "./styles.css";

const onClickAdd = () => {
  //valueでinputに入力された値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //追加
  //divタグ生成
  const div = document.createElement("div");
  //divタグにクラス付与
  div.className = "list-row";
  //liタグ生成
  const li = document.createElement("li");
  //liタグにテキストを追加
  li.innerText = inputText;

  //完了
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //リストから削除
    deleteFromIncompleteList(completeButton);

    //完了リストへ移して、未完了から削除したい

    //完了リストへ追加する要素
    const addTarget = completeButton.parentNode;
    //todo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    //初期化したら、liとbuttonを生成して追加したい
    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //dib¥vタグの子要素に追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    //これらを完了リストへ追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //削除
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親divタグをリストから削除したい

    deleteFromIncompleteList(deleteButton);
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

//未完了リストから削除する関数を共通化
const deleteFromIncompleteList = (target) => {
  const deleteTarget = target.parentNode;
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};
