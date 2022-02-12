
class Init {
    constructor(){
        this.dic = JSON.parse(JSON.stringify(iconsName))
        this.icons = JSON.parse(JSON.stringify(this.dic))
        console.log( this.icons);
        this.container = $("#app")
        this.theme = "filled"
        this.render()
        this.renderCategory()
        this.bingding()
    }
    render(){
        const { icons,theme } = this 
        this.container.html("")
        for(let key in icons){
            const panelDom = $(`<div class='panel'></div>`)
            const title = $(`<div class='title'>${key}:</div>`)
            const content = $(`<div class='content'></div>`)
            panelDom.append(title).append(content)
            icons[key].map(cur => {
                const name = cur.replaceAll(" ", "_")
                const className = `'icon material-icon material-${theme}'`
                const containerDom = $(`<div class='container'></div>`)
                const iconDom = $(`<div class=${className} >${name}</div>`)
                const tagDom = $(`<div class="iconName">${name}</div>`)
                containerDom.append(iconDom).append(tagDom).appendTo(content)
                this.container.append(panelDom)
            })
            
        }
    }
    renderCategory(){
        const { dic } = this 
        const category = $(".category>.picker")
        const all = $("<li class='category-item checked'>all</li>")
        category.append(all)
        for(let key in dic){
            category.append($(`<li class='category-item'>${key}</li>`))
        }
    }
    bingding(){
        const that = this
        $("body").delegate('.title',"click",function () {
            $(this).siblings().toggle()
        })
        $(".category-item").on("click",function(){
            const category = this.innerHTML 
            that.icons =category=== "all"? 
                that.dic:
                {[category]:that.dic[category]}
            that.render()
            $(this).parent().children().removeClass("checked")
            $(this).addClass("checked")
        })
        $(".theme-item").on("click",function(){
            $(this).parent().children().removeClass("checked")
            $(this).addClass("checked")
            that.theme = this.innerHTML
            that.render()
        })
    }
}
new Init()
