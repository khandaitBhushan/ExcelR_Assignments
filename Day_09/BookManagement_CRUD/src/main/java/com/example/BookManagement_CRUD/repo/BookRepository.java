package com.example.BookManagement_CRUD.repo;

import com.example.BookManagement_CRUD.Model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book,Integer> {
}
