

let dataBlog = []
function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById("projek").value
    let sdate = document.getElementById("startdate").value
    let edate = document.getElementById("enddate").value
    let describe = document.getElementById("descrip").value
    let image = document.getElementById("input-blog-image").files

    let nodejs = document.getElementById("ICBnoj").checked
    if(nodejs){
        nodejs = document.getElementById("ICBnoj").value
    } else {
        nodejs = ''
    }

    let reactjs = document.getElementById("ICBrej").checked
    if(reactjs){
        reactjs = document.getElementById("ICBrej").value
    } else {
        reactjs = ''
    }

    let nextjs = document.getElementById("ICBnej").checked
    if(nextjs){
        nextjs = document.getElementById("ICBnej").value
    } else {
        nextjs = ''
    }    

    let typescript = document.getElementById("ICBts").checked
    if(typescript){
        typescript = document.getElementById("ICBts").value
    } else {
        typescript = ''
    }    

    image = URL.createObjectURL(image[0])

    console.log(nodejs);
    console.log(reactjs);
    console.log(nextjs);
    console.log(typescript);

    let blog = {
        title,
        sdate,
        edate,
        describe,
        image,
        nodejs,
        reactjs,
        nextjs,
        typescript
    }

    dataBlog.push(blog)

    console.log(dataBlog);

    renderBlog()
}


function renderBlog() {
    console.log(dataBlog.length);
    document.getElementById("contents").innerHTML = ""
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
                    <img src="${dataBlog[index].nodejs}" alt="">
                </div>
                <div>
                    <img src="${dataBlog[index].reactjs}" alt="">
                </div>
                <div>
                    <img src="${dataBlog[index].nextjs}" alt="">
                </div>
                <div>
                    <img src="${dataBlog[index].typescript}" alt="">
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
