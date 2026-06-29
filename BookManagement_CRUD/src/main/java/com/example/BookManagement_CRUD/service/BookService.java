package com.example.BookManagement_CRUD.service;

import com.example.BookManagement_CRUD.Model.Book;
import com.example.BookManagement_CRUD.repo.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    private final BookRepository repo;


    public BookService(BookRepository repo) {
        this.repo = repo;
    }

    public Book addBook(Book book){
        return repo.save(book);
    }

    public Book getById(int id){
        return repo.findById(id).orElse(null);
    }

    public List<Book> getAllBooks(){
        return repo.findAll();
    }

    public void deleteBookById(int id){
        if(repo.existsById(id)){
            repo.deleteById(id);
        }
    }

    public Book updateById(Book book, int id){
        Book currBook = repo.findById(id).orElse(null);
        if(currBook == null)
            return null;
        currBook.setName(book.getName());
        currBook.setAutherName(book.getAutherName());
        currBook.setPrice(book.getPrice());
        currBook.setQuantity(book.getQuantity());
        return repo.save(currBook);
    }
}
