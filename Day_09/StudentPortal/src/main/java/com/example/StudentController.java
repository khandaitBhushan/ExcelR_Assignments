package com.example;

import com.example.Student;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class StudentController {

    @RequestMapping("/student")
    public ModelAndView showStudent() {

        Student student =
                new Student(101, "Johnny Deph", "Information Technology");

        ModelAndView mv = new ModelAndView();

        mv.addObject("student", student);

        mv.setViewName("student");

        return mv;
    }

}