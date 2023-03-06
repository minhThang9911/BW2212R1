import java.net.InetAddress;

fun main(){
    val ip = InetAddress.getLocalHost()
    println("The IP address of the Current Device is: " + ip.getHostAddress())
}