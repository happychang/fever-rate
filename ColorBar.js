function ColorBar(value, pop) {
    density = value / pop * 10000;
    if (value == 0)
        return "white"
    else if (value <= 1)
        return "#87cefa"
    else if (value <= 4)
        return "#00bfff"
    else if (density <= 20)
        return "#00FF00"
    else if (density <= 40)
        return "#00CC00"
    else if (density <= 70)
        return "#FFFF00"
    else if (density <= 100)
        return "#ffd700"
    else if (density <= 200)
        return "#FF8C00"
    else if (density <= 400)
        return "#FF6600"
    else if (density <= 800)
        return "#FF0000"
    else if (density <= 1600)
        return "#CC0000"
    else
        return "#a020f0"
    //return "rgb("+r+","+g+","+b+")";
}
