/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package TecPhone_HomeController;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;
@Controller
/**
 *
 * @author truon
 */
public class HomeController {
        @GetMapping({"/", "/trang-chu"})
    public String home(Model model) {
        model.addAttribute("message", "Xin chào Spring MVC!");
        return "user/index"; // => /WEB-INF/views/home.jsp
    }
        @GetMapping({"/GioiThieu"})
    public String product(Model model){
        model.addAttribute("message","Sản phẩm");
        return "user/GioiThieu";
    }
        @GetMapping({"/trangchu"})
    public String trangChu(Model model){
        model.addAttribute("message","Trang chủ");
        return "user/trangchu";
    }
}
