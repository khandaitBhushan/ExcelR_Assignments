package com.example.BookManagement_CRUD.controller;

import com.example.BookManagement_CRUD.Model.Book;
import com.example.BookManagement_CRUD.service.BookService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book")
public class BookController {
    private final BookService service;

    public BookController(BookService service) {
        this.service = service;
    }

    @GetMapping("{id}")
    public ResponseEntity<Book> getBookById(@PathVariable int id){
        Book currBook = service.getById(id);
        if(currBook == null)
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        return ResponseEntity.ok(currBook);
    }
    @GetMapping()
    public ResponseEntity<List<Book>> getBooks(){
        List<Book> currBooks = service.getAllBooks();
        if(currBooks == null)
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        return ResponseEntity.ok(service.getAllBooks());
    }

    @PostMapping()
    public ResponseEntity<Book> addBook(@RequestBody Book book){
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(service.addBook(book));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Book> updateBook(@RequestBody Book book, @PathVariable int id){
        return ResponseEntity.ok(service.updateById(book,id));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable int id){
        service.deleteBookById(id);
        return ResponseEntity.ok("deletion Successfully!");
    }
}
