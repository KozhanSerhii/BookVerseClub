// Масив з книгами для кожної категорії
const books = {
    all: [
        { title: "Powerless", img: "powerless.jpeg" },
        { title: "Harry Potter and the Sorcerer’s Stone", img: "Harry Potter and the Sorcerer’s Stone.jpg" },
        { title: "A Good Girl's Guide to Murder", img: "A-good.jpg" },
        { title: "Punk 57", img: "punk.jpg" },
        { title: "The Love Hypothesis", img: "the-love.jpg" },
        { title: "The Pale Horse", img: "Aghata.jpg" },
        { title: "Shatter Me", img: "shatter.jpg" },
        { title: "Holly", img: "King.jpg" },
        { title: "Better than the Movies", img: "Better than the Movies.jpg" },
        { title: "Murder on the Orient Express", img: "Murder on the Orient Express.jpg" },
        { title: "A Flicker in the Dark", img: "A Flicker in the Dark.jpg" },
        { title: "The Housemaid", img: "The Housemaid.jpg" },
        { title: "Love on the Brain", img: "Love on the Brain.jpg" },
        { title: "Good Girl, Bad Blood", img: "Good Girl, Bad Blood.jpg" },
    ],
    romance: [
        { title: "Punk 57", img: "punk.jpg" },
        { title: "The Love Hypothesis", img: "the-love.jpg" },
        { title: "Icebreaker", img: "Icebreaker.jpg" },
        { title: "Love, Theoretically", img: "Love, Theoretically.jpg" },
        { title: "The Fine Print", img: "The Fine Print.jpg" },
        { title: "Better than the Movies", img: "Better than the Movies.jpg" },
        { title: "Love on the Brain", img: "Love on the Brain.jpg" },
        { title: "Twisted Love", img: "Twisted Love.jpg" },
        { title: "Beach Read", img: "Beach Read.jpg" },
        { title: "The Spanish Love Deception", img: "The Spanish Love Deception.jpg" },
        { title: "Wildfire", img: "Wildfire.jpg" },
        { title: "People We Meet on Vacation", img: "People We Meet on Vacation.jpg" },
        { title: "Funny Story", img: "Funny Story.jpg" },
        { title: "It Happened One Summer", img: "It Happened One Summer.jpg" },
    ],
    detective: [
        { title: "The Pale Horse", img: "Aghata.jpg" },
        { title: "A Good Girl's Guide to Murder", img: "A-good.jpg" },
        { title: "The Housemaid", img: "The Housemaid.jpg" },
        { title: "As Good As Dead", img: "As Good As Dead.jpg" },
        { title: "A Flicker in the Dark", img: "A Flicker in the Dark.jpg" },
        { title: "The Housemaid's Secret", img: "The Housemaid's Secret.jpg" },
        { title: "Murder on the Orient Express", img: "Murder on the Orient Express.jpg" },
        { title: "Good Girl, Bad Blood", img: "Good Girl, Bad Blood.jpg" },
        { title: "The Thursday Murder Club", img: "The Thursday Murder Club.jpg" },
        { title: "Bonded in Death", img: "Bonded in Death.jpg" },
        { title: "The Big Empty", img: "The Big Empty.jpg" },
        { title: "The Wrong Daughter", img: "The Wrong Daughter.jpg" },
        { title: "A Very Bad Thing", img: "A Very Bad Thing.jpg" },
        { title: "Hart's Ridge", img: "Hart's Ridge.jpg" },
    ],
    thriller: [
        { title: "Holly", img: "King.jpg" },
        { title: "As Good As Dead", img: "As Good As Dead.jpg" },
        { title: "First Lie Wins", img: "First Lie Wins.jpg" },
        { title: "Don't Let Her Stay", img: "Don't Let Her Stay.jpg" },
        { title: "Fairy Tale", img: "Fairy Tale.jpg" },
        { title: "Strange Sally Diamond", img: "Strange Sally Diamond.jpg" },
        { title: "One Perfect Couple", img: "One Perfect Couple.jpg" },
        { title: "Darling Girls", img: "Darling Girls.jpg" },
        { title: "The Good Lie", img: "The Good Lie.jpg" },
        { title: "Wrong Place Wrong Time", img: "Wrong Place Wrong Time.jpg" },
        { title: "The Wife Upstairs", img: "The Wife Upstairs.jpg" },
        { title: "Hidden Pictures", img: "Hidden Pictures.jpg" },
        { title: "The God of the Woods", img: "The God of the Woods.jpg" },
        { title: "Listen for the Lie", img: "Listen for the Lie.jpg" },

    ],
    fantasy: [
        { title: "Powerless", img: "powerless.jpeg" },
        { title: "Harry Potter and the Sorcerer’s Stone", img: "Harry Potter and the Sorcerer’s Stone.jpg" },
        { title: "Shatter Me", img: "shatter.jpg" },
        { title: "Lightlark", img: "Lightlark.jpg" },
        { title: "The Atlas Six", img: "The Atlas Six.jpg" },
        { title: "The Brothers Hawthorne", img: "The Brothers Hawthorne.jpg" },
        { title: "Tress of the Emerald Sea", img: "Tress of the Emerald Sea.jpg" },
        { title: "Empire of the Vampire", img: "Empire of the Vampire.jpg" },
        { title: "A Game of Thrones", img: "A Game of Thrones.jpg" },
        { title: "The Fellowship of the Ring", img: "The Fellowship of the Ring.jpg" },
        { title: "A Court of Thorns and Roses", img: "A Court of Thorns and Roses.jpg" },
        { title: "Six of Crows", img: "Six of Crows.jpg" },
        { title: "The Poppy War", img: "The Poppy War.jpg" },
        { title: "The Night Circus", img: "The Night Circus.jpg" },
    ],
    psychology: [
        { title: "Thinking, Fast and Slow", img: "Thinking, Fast and Slow.jpg" },
        { title: "The Mountain Is You", img: "The Mountain Is You.jpg" },
        { title: "Man’s Search for Meaning", img: "Man’s Search for Meaning.jpg" },
        { title: "The Body Keeps the Score", img: "The Body Keeps the Score.jpg" },
        { title: "Influence: The Psychology of Persuasion", img: "Influence.jpg" },
        { title: "The Power of Habit", img: "The Power of Habit.jpg" },
        { title: "Outliers: The Story of Success", img: "Outliers.jpg" },
        { title: "How to Win Friends & Influence People", img: "How to Win Friends & Influence Peopl.jpg" },
        { title: "Maybe You Should Talk to Someone", img: "Maybe You Should Talk to Someone.jpg" },
        { title: "Man and His Symbols", img: "Man and His Symbols.jpg" },
        { title: "Talking to Strangers", img: "Talking to Strangers.jpg" },
        { title: "Adult Children of Emotionally Immature Parents", img: "Adult Children of Emotionally Immature Parents.jpg" },
        { title: "The Art of Loving", img: "The Art of Loving.jpg" },
        {title: "The Psychology of Money", img: "The Psychology of Money.jpg"},
    ],
    self: [
        { title: "Atomic Habits", img: "Atomic Habits.jpg" },
        { title: "Wintering: The Power of Rest and Retreat in Difficult Times", img: "Wintering.jpg" },
        { title: "Dopamine Nation: Finding Balance in the Age of Indulgence", img: "Dopamine Nation.jpg" },
        { title: "Think Again: The Power of Knowing What You Don't Know", img: "Think Again.jpg" },
        { title: "Die with Zero: Getting All You Can from Your Money and Your Life", img: "Die with Zero.jpg" },
        { title: "Call It What You Want", img: "Call It What You Want.jpg" },
        { title: "Dear Dolly", img: "Dear Dolly.jpg" },
        { title: "Why Has Nobody Told Me This Before?", img: "Why Has Nobody Told Me This Before.jpg" },
        { title: "Dopamine Detox : A Short Guide to Remove Distractions and Get Your Brain to Do Hard Things", img: "Dopamine Detox.jpg" },
        { title: "The Let Them Theory", img: "The Let Them Theory.jpg" },
        { title: "Don't Believe Everything You Think", img: "Don't Believe Everything You Think.jpg" },
        { title: "ADHD is Awesome: A Guide to (Mostly) Thriving with ADHD", img: "ADHD is Awesome.jpg" },
        { title: "Bad Therapy: Why the Kids Aren't Growing Up", img: "Bad Therapy.jpg" },
        { title: "Girls That Invest: Your Guide to Financial Independence through Shares and Stocks", img: "Girls That Invest.jpg" },
    ],
    children: [
        { title: "Harry Potter and the Sorcerer’s Stone", img: "Harry Potter and the Sorcerer’s Stone.jpg" },
        { title: "The Gruffalo", img: "The Gruffalo.jpg" },
        { title: "The Giving Tree", img: "The Giving Tree.jpg" },
        { title: "Matilda", img: "Matilda.jpg" },
        { title: "Green Eggs and Ham", img: "Green Eggs and Ham.jpg" },
        { title: "The Little Prince", img: "The Little Prince.jpg" },
        { title: "The Lion, the Witch and the Wardrobe", img: "The Lion, the Witch and the Wardrobe.jpg" },
        { title: "Where the Sidewalk Ends", img: "Where the Sidewalk Ends.jpg" },
        { title: "The Cat in the Hat", img: "The Cat in the Hat.jpg" },
        { title: "A Little Princess", img: "A Little Princess.jpg" },
        { title: "Pippi Longstocking", img: "Pippi Longstocking.jpg" },
        { title: "The Tale of Peter Rabbit", img: "The Tale of Peter Rabbit.jpg" },
        { title: "The Skull", img: "The Skull.jpg" },
        { title: "Knight Owl", img: "Knight Owl.jpg" },
    ]
};

// Функція для оновлення списку книг
function updateBookList(category) {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = ""; // Очистити поточні книги

    books[category].forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item");
        bookItem.innerHTML = `
            <img src="${book.img}" alt="${book.title}">
            <h3>${book.title}</h3>
        `;
        bookList.appendChild(bookItem);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Отримуємо всі посилання з категоріями
    const categoryLinks = document.querySelectorAll(".catalog-menu a");

    // Додаємо обробник подій для кожного посилання
    categoryLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Запобігаємо перезавантаженню сторінки
            const category = this.getAttribute("data-category"); // Отримуємо категорію
            updateBookList(category); // Оновлюємо список книг
        });
    });

    // Завантажуємо всі книги при першому завантаженні сторінки
    updateBookList("all");
});



document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Зупиняємо стандартну відправку форми

    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        info: document.getElementById("info").value
    };

    console.log("Надсилаємо дані:", formData); // Перевіряємо, чи збираються всі дані

    fetch("https://script.google.com/macros/s/AKfycbyedHmwnG_Eb_Wo58ws4C5imGcv_J4bh4ON6ZwpSDUBDQLNC_VqL1a7c8R_4zL50O4M/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    }).then(() => {
        alert("Форма успішно відправлена!");
        document.getElementById("orderForm").reset();
    }).catch(error => console.error("Помилка:", error));
});


