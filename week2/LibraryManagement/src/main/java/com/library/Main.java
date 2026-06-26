package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) {
        // 1. Initialize Spring Container (Fixed the typo here!)
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // 2. Retrieve the managed singleton instance bean
        BookService bookService = (BookService) context.getBean("bookService");

        // 3. Trigger execution flow
        bookService.runBusinessLogic();
    }
}