const insertMenu = () => {
    let div = document.createElement('div');
    document.body.insertAdjacentHTML("afterbegin", `<div id="fixed-menu-block">
    <ul>
        <li><a href="./index1.html">Практическая №1</a></li>
        <li><a href="./index2.html">Практическая №2</a></li>
        <li><a href="./index3.html">Практическая №3</a></li>
        <li><a href="./index4.html">Практическая №4</a></li>
        <li><a href="./index5.html">Практическая №5</a></li>
        <li><a href="./index6.html">Практическая №6</a></li>
        <li><a href="./index7.html">Практическая №7</a></li>
        <li><a href="./index8.html">Практическая №8</a></li>
        <li><a href="./index9.html">Практическая №9</a></li>
        <li><a href="./index10.html">Практическая №10</a></li>
        <li><a href="./index11.html">Практическая №11</a></li>
        <li><a href="./index12.html">Практическая №12</a></li>
        <li><a href="./index13.html">Практическая №13</a></li>
    </ul>
  </div>`);

    div = document.getElementById('fixed-menu-block');
    div.style.position = 'fixed';
    div.style.top = '0';
    div.style.right = '0';
    div.style.backgroundColor = 'rgba(42,42,42,0.8)';
    div.style.zIndex = '1000';
    div.style.borderRadius = '0 0 0 10px';
    div.style.boxShadow = '0 0 10px 0 rgba(0, 0, 0, 0.5)';
    div.style.color = '#fff';

    // Добавить стиль для ссылок
    let links = document.querySelectorAll('#fixed-menu-block a');
    for (let i = 0; i < links.length; i++) {
        links[i].style.color = '#fff';
        links[i].style.display = 'block';
        links[i].style.padding = '2px 10px';
        links[i].style.textDecoration = 'none';

        if (links[i].href === window.location.href) {
            links[i].style.backgroundColor = 'rgba(0,0,0,0.5)';
            links[i].style.borderRadius = '10px';
        }
    }
}

insertMenu();