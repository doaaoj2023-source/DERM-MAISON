let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
let editIndex = null;

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const box = document.getElementById("messages");
const searchInput = document.getElementById("search");

render();

form.addEventListener("submit", e => {
    e.preventDefault();

    const data = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
        date: new Date().toLocaleDateString()
    };

    if (editIndex === null) {
        messages.unshift(data);
    } else {
        messages[editIndex] = data;
        editIndex = null;
    }

    localStorage.setItem("contactMessages", JSON.stringify(messages));
    form.reset();
    render();
});

searchInput.addEventListener("input", render);

function render() {
    box.innerHTML = "";
    const filter = searchInput.value.toLowerCase();

    messages.forEach((m, i) => {
        if (
            !m.name.toLowerCase().includes(filter) &&
            !m.email.toLowerCase().includes(filter) &&
            !m.message.toLowerCase().includes(filter)
        ) return;

        box.innerHTML += `
        <div class="message-card">
            <h4>${m.name}</h4>
            <small>${m.email} • ${m.date}</small>
            <p>${m.message}</p>
            <div class="actions">
                <button class="edit" onclick="editMsg(${i})">Edit</button>
                <button class="delete" onclick="deleteMsg(${i})">Delete</button>
            </div>
        </div>`;
    });
}

function editMsg(i) {
    nameInput.value = messages[i].name;
    emailInput.value = messages[i].email;
    messageInput.value = messages[i].message;
    editIndex = i;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function deleteMsg(i) {
    if (confirm("Delete this message?")) {
        messages.splice(i, 1);
        localStorage.setItem("contactMessages", JSON.stringify(messages));
        render();
    }
}
