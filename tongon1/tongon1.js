let songs = JSON.parse(localStorage.getItem("songs")) || [];
let currentId = songs.length > 0 ? songs[songs.length - 1].id + 1 : 1;
let editId = null;
let titleInput = document.getElementById("title");

let artistInput = document.getElementById("artist");
let table = document.getElementById("songTable");
let formTitle = document.getElementById("formTitle");
let submitBtn = document.getElementById("submitBtn");
let searchInput = document.getElementById("search");

function render(data = songs) {
    table.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let s = data[i];

        table.innerHTML += `
            <tr>
                <td>${s.id}</td>
                <td>${s.title}</td>
                <td>${s.artist}</td>
                <td>
                    <button onclick="editSong(${s.id})">Sửa</button>
                    <button onclick="deleteSong(${s.id})">Xóa</button>
                </td>
            </tr>
        `;
    }
}
function saveData() {
    localStorage.setItem("songs", JSON.stringify(songs));
}

function handleSubmit() {
    let title = titleInput.value.trim();
    let artist = artistInput.value.trim();
    if (title === "" || artist === "") {
        alert("Không được để trống!");
        return;
    }
    if (editId === null) {
        let newSong = {
            id: currentId,
            title: title,
            artist: artist
        };

        songs.push(newSong);
        currentId++;
    } else {
        for (let i = 0; i < songs.length; i++) {
            if (songs[i].id === editId) {
                songs[i].title = title;
                songs[i].artist = artist;
            }
        }

        editId = null;
        formTitle.innerText = "🎵 Thêm bài hát";
        submitBtn.innerText = "Thêm";
    }

    saveData();
    render();
    titleInput.value = "";
    artistInput.value = "";
}

function editSong(id) {
    for (let i = 0; i < songs.length; i++) {
        if (songs[i].id === id) {
            titleInput.value = songs[i].title;
            artistInput.value = songs[i].artist;
            editId = id;
        }
    }

    formTitle.innerText = "✏️ Sửa bài hát";
    submitBtn.innerText = "Cập nhật";
}

function deleteSong(id) {
    let check = confirm("Bạn có chắc muốn xóa không?");
    if (!check) return;

    let newList = [];
    for (let i = 0; i < songs.length; i++) {
        if (songs[i].id !== id) {
            newList.push(songs[i]);
        }
    }

    songs = newList;

    saveData();
    render();
}
function searchSong() {
    let keyword = searchInput.value.toLowerCase();

    let result = [];
    for (let i = 0; i < songs.length; i++) {
        if (songs[i].title.toLowerCase().includes(keyword)) {
            result.push(songs[i]);
        }
    }

    render(result);
}
render();