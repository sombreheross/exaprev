class User {
    constructor(title, first, last, city, country, age, email, picture) {
        this.title = title;
        this.first = first;
        this.last = last;
        this.city = city;
        this.country = country;
        this.age = age;
        this.email = email;
        this.picture = picture;
        this.present = false;
        this.card = this.generateUserElement();
        this.card.addEventListener("click", () => {
            this.togglePresence(this.card)
        });
    }

    static presenceCount = 0;

    generateUserElement() {
        const containerElement = document.createElement("div");
        containerElement.classList.add("user");
        containerElement.dataset.present = this.present;
        const childHTML =
            `<img src="${this.picture}">
        <div class="user--info">
            <h1>${this.title} ${this.first} ${this.last}</h1>
            <p>${this.age}</p>
            <p>${this.city}, ${this.country}</p>
        </div>
        <a> <href="mailto:${this.email}">
            <span class="mail">✉️</span>
        </a>
        </div>
        `
        containerElement.insertAdjacentHTML("afterbegin", childHTML);
        return containerElement;
    }

    render() {
        document.querySelector("main").append(this.card);
    }

    togglePresence(card) {
        if (this.present == true) {
            this.present = false;
            card.dataset.present = false;
            User.presenceCount -= 1;
        } else {
            this.present = true;
            card.dataset.present = true;
            User.presenceCount += 1;
        }
        document.querySelector('.counter').textContent = User.presenceCount + "/20 people are here";
    }
}

export default User;