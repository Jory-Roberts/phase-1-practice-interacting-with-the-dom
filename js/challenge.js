/*See the timer increment every second once the page has loaded.
Manually increment and decrement the counter using the plus and minus buttons.
"Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
Pause the counter, which should:
pause the counter
disable all buttons except the pause button
switch the label on the button from "pause" to "resume"
Click the "restart" button to restart the counter and re-enable the buttons.
Leave comments on my gameplay, such as: "Wow, what a fun game this is."*/
document.addEventListener("DOMContentLoaded", () => {
    const counter = () => {
        timer = setInterval(() => {
            let count = parseInt(
                document.getElementById("counter").textContent
            );
            count++;
            document.getElementById("counter").innerText = count;
        }, 1000);
    };

    const startCounter = (timer) => counter(timer);
    const stopCounter = (timer) => clearInterval(timer);

    startCounter();

    minus = document.getElementById("minus");
    plus = document.getElementById("plus");
    heart = document.getElementById("heart");
    pause = document.getElementById("pause");
    commentForm = document.getElementsByTagName("form")[0];

    console.log(minus, plus, heart, pause, commentForm);

    const stopCount = (e, timer) => {
        id = e.target.id;

        if (id === "pause") {
            console.log("paused!");
            stopCounter(timer);
            document.getElementById("pause").textContent = "resume";
            document.getElementById("pause").id = "resume";
            document
                .getElementById("minus")
                .setAttribute("disabled", "disabled");
            document
                .getElementById("plus")
                .setAttribute("disabled", "disabled");
            document
                .getElementById("heart")
                .setAttribute("disabled", "disabled");
        } else if (id === "resume") {
            console.log("started!");
            timer = startCounter();
            document.getElementById("resume").textContent = "pause";
            document.getElementById("resume").id = "pause";
            document.getElementById("minus").removeAttribute("disabled");
            document.getElementById("plus").removeAttribute("disabled");
            document.getElementById("heart").removeAttribute("disabled");
        }
    };

    const likeCounter = (e) => {
        const likes = document.querySelector(".likes");
        console.log(likes);
        const numOfHearts = parseInt(
            document.getElementById("counter").textContent
        );
        console.log(numOfHearts);

        let pElement = document.getElementById(
            `${parseInt(document.getElementById("counter").textContent)}`
        );
        console.log(pElement);

        if (!!pElement) {
            let heartCount = pElement.textContent.split(" ");
            heartCount++;
            pElement.textContent = `${numOfHearts} has been liked ${heartCount} of times`;

            console.log(heartCount);
        } else {
            let p = document.createElement("p");
            p.textContent = `${numOfHearts} has been liked 1 time`;
            p.setAttribute = ("id", `{numOfHearts}`);
            likes.append(p);
        }
    };

    const addingEventListeners = () => {
        document
            .getElementById("pause")
            .addEventListener("click", (e) => stopCount(e, timer));
        document.getElementById("minus").addEventListener("click", (e) => {
            let currentCount = parseInt(
                document.getElementById("counter").textContent
            );
            currentCount--;
            document.getElementById("counter").textContent = currentCount;
        });
        document.getElementById("plus").addEventListener("click", (e) => {
            let currentCount = parseInt(
                document.getElementById("counter").textContent
            );
            currentCount++;
            document.getElementById("counter").textContent = currentCount;
        });

        document.getElementById("heart").addEventListener("click", likeCounter);

        let form = document.getElementById("comment-form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = Object.fromEntries(new FormData(e.target));
            let comment = document.createElement("p");
            comment.textContent = `${formData.comment}`;
            document.getElementById("list").append(comment);

            console.log(comment);
            console.log(formData);
        });
    };
    addingEventListeners();
    likeCounter();
});
