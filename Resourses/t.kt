fun main(){
    val name = "Strange.World.2022.2160p.AMZN.WEB-DL.DDP5.1.H.264-FLUX"
    val indexs = arrayOf(name.indexOf("480p"),name.indexOf("720p"),name.indexOf("1080p"),name.indexOf("2160p"))
    val index = indexs.max()
    val out = name.substring(0, index)
    println(out)
    println(indexs.toString())
}