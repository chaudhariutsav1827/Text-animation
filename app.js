const paths = document.querySelectorAll("#text path");
paths.forEach((path,index) => {
    console.log(`${index} length is ${path.getTotalLength()}`);
});