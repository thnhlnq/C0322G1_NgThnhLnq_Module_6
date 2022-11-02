package com.book.dto;

import com.book.model.Category;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

public class BookDto {

    private Integer id;

    private String code;

    @NotBlank(message = "Vui Lòng Không Để Trống.")
    private String author;

    @NotBlank(message = "Vui Lòng Không Để Trống.")
    private String description;

    @NotBlank(message = "Vui Lòng Không Để Trống.")
    private String dimension;

    @NotBlank(message = "Vui Lòng Không Để Trống.")
    private String image;

    @NotBlank(message = "Vui Lòng Không Để Trống.")
    private String name;

    @NotNull(message = "Vui Lòng Không Để Trống.")
    @Min(value = 1, message = "Giá Sách Phải Lớn Hơn 0.")
    private double price;

    @NotBlank(message = "Vui Lòng Không Để Trống.")
    private String publisher;

    @NotNull(message = "Vui Lòng Không Để Trống.")
    @Min(value = 1, message = "Số Lượng Sách Phải Lớn Hơn 0.")
    private int quantity;

    @NotNull(message = "Vui Lòng Không Để Trống.")
    private LocalDate releaseDate;

    @NotNull(message = "Vui Lòng Không Để Trống.")
    @Min(value = 1, message = "Số Trang Sách Phải Lớn Hơn 0.")
    private int totalPages;

    @NotBlank(message = "Vui Lòng Không Để Trống.")
    private String translator;

    private boolean status;

    private Category category;

    public BookDto() {
    }

    public BookDto(Integer id, String code, String author, String description, String dimension, String image, String name, double price, String publisher, int quantity, LocalDate releaseDate, int totalPages, String translator, boolean status, Category category) {
        this.id = id;
        this.code = code;
        this.author = author;
        this.description = description;
        this.dimension = dimension;
        this.image = image;
        this.name = name;
        this.price = price;
        this.publisher = publisher;
        this.quantity = quantity;
        this.releaseDate = releaseDate;
        this.totalPages = totalPages;
        this.translator = translator;
        this.status = status;
        this.category = category;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDimension() {
        return dimension;
    }

    public void setDimension(String dimension) {
        this.dimension = dimension;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public int getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(int totalPages) {
        this.totalPages = totalPages;
    }

    public String getTranslator() {
        return translator;
    }

    public void setTranslator(String translator) {
        this.translator = translator;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
