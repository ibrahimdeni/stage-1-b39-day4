

let dataBlog = []
function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById("projek").value
    let sdate = document.getElementById("startdate").value
    let edate = document.getElementById("enddate").value
    let describe = document.getElementById("descrip").value
    let image = document.getElementById("input-blog-image").files

    image = URL.createObjectURL(image[0])

    let blog = {
        title,
        sdate,
        edate,
        describe,
        image
    }

    dataBlog.push(blog)

    console.log(dataBlog);

    renderBlog()
}


function renderBlog() {
    console.log(dataBlog.length);
    for (let index = 0; index < dataBlog.length; index++) {
        console.log(dataBlog[index]);
        document.getElementById("contents").innerHTML += 
        `
        <div class="kotak-BP">
            <img src="${dataBlog[index].image}" alt="cutecat">
            <div class="BP-info">
                <div class="BP-title">
                    <p>${dataBlog[index].title}</p>
                </div>
                <div class="BP-duration">
                    <p>durasi : 3 bulan</p>
                </div>
                <div class="BP-detail">
                    <p>
                        ${dataBlog[index].describe}
                    </p>
                </div>
            </div>
            <div class="BP-icon">
                <div>
                    <img src="assets/nodejs.png" alt="">
                </div>
                <div>
                    <img src="assets/nextjs.png" alt="">
                </div>
                <div>
                    <img src="assets/reactjs.png" alt="">
                </div>
                <div>
                    <img src="assets/TS.png" alt="">
                </div>
            </div>
            <div class="BP-button">
                <div class="BP-button-edit">
                    <button>edit</button>
                </div>
                <div class="BP-button-delete">
                    <button>delete</button>
                </div>
            </div>
        </div>
        `
    }

}
