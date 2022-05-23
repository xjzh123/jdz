notional = "比鄙兵病乘持从达当道得尔伐犯方负赋更苛故顾观归过好号还会惠及极计济假间简见竭尽进居举具俱聚遽决绝类临虑论漫明名命难平戚强窃请穷求取去全任入若善少舍涉生胜师施实食使释市恃数属说素汤徒亡为委务鲜向效谢信行形兴修徐许寻业遗贻夷异易诣益阴引盈余狱御缘远云章知止志致质专走足卒作坐"
func = "之其而以何于"



function input() {
    text = document.forms.textform.textinput.value;
    list = text.split("")
    len = text.length
    for (i = 0; i < len; i++) {
        chara = text[i]
        for (j=0; j < notional.length; j++) {
            if (chara == notional[j]) {
                chara = "<span style='color:red;'>" + chara + "</span>"
            }
        for (k=0; k < func.length; k++) {
            if (chara == func[k]) {
                chara = "<span style='color:blue;'>" + chara + "</span>"
            }
        }
        if (chara == "\n") {
            chara = "<br>"
        }
        list[i] = chara
        }
    }
    text2 = list.join("")
    document.getElementById("textoutput").innerHTML = text2
}