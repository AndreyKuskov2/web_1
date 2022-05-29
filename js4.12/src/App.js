import "./App.css";
import React, { useState } from "react";

export default function App() {
  // Объявляем новую переменную состояния "count"
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("банан");
  const [todos, setTodos] = useState([{ text: "Изучить хуки?" }]);

  console.log(todos[0]["text"]);
  return (
    <div class="carder">
      <div class="card">
        <div class="first-card">
          <div class="text-on-card">Наушники</div>
          <img
            class="img-card"
            src="https://audeze.su/wp-content/uploads/2018/05/Audeze-Mobius-Product-Shots-Oct-2018-Carbon3Q_Mic_2000x-600x600.jpg"
          ></img>
        </div>

        <button class="second-card" onClick={() => setCount(count + 2590)}>
          <div class="img-card-tw"></div>
          <div class="card-price">2.590 ₽</div>
        </button>
      </div>
      <div class="card2">
        <div class="first-card">
          <div class="text-on-card">Молоко</div>
          <img
            class="img-card"
            src="https://roscontrol.com/wp-content/uploads/2021/09/e7b17f6a38a36f3af2d7.jpg"
          ></img>
        </div>

        <button class="second-card2" onClick={() => setCount(count + 1560)}>
          <div class="img-card-tw"></div>
          <div class="card-price">1.560 ₽</div>
        </button>
      </div>
      <div class="card3">
        <div class="first-card">
          <div class="text-on-card">Диван</div>
          <img
            class="img-card"
            src="https://mirmebely.ru/upload/iblock/084/084f7fbfa827f8786af20c71070dc8b2.jpg"
          ></img>
        </div>

        <button class="second-card3" onClick={() => setCount(count + 1000)}>
          <div class="img-card-tw"></div>
          <div class="card-price">1.000 ₽</div>
        </button>
      </div>
      <div class="card4">
        <div class="first-card">
          <div class="text-on-card">Дом</div>
          <img
            class="img-card"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRU1jWd3eUj1qxeTOwNsw2yICz28_sINByaQ&usqp=CAU"
          ></img>
        </div>

        <button class="second-card4" onClick={() => setCount(count + 9999)}>
          <div class="img-card-tw"></div>
          <div class="card-price"> ∞ ₽</div>
        </button>
      </div>
      <div class="card5">
        <div class="first-card">
          <div class="text-on-card">Цветок</div>
          <img
            class="img-card"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuXz5oTJhW6o2KFfujTmfSLt-IZzJvbYRzrg&usqp=CAU"
          ></img>
        </div>

        <button class="second-card5" onClick={() => setCount(count + 9500)}>
          <div class="img-card-tw"></div>
          <div class="card-price">9.500₽</div>
        </button>
      </div>
      <div class="card6">
        <div class="first-card">
          <div class="text-on-card">Холодильник</div>
          <img
            class="img-card"
            src="https://i5.otzovik.com/2016/02/24/3016014/img/53686956.jpeg"
          ></img>
        </div>

        <button class="second-card6" onClick={() => setCount(count + 15)}>
          <div class="img-card-tw"></div>
          <div class="card-price">15000₽</div>
        </button>
      </div>
      <div class="itog">
        <p class="price">Итоговая стоимость: {count} ₽</p>
      </div>
    </div>
  );
}
