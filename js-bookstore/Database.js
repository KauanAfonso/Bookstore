const Poster = require("./entities/Posters")
const Product = require("./entities/Produtc")

module.exports = class Database extends Product{
    //objetos com arrays
    #storage = {
        authors:[],
        books:[],
        posters: [],
        orders: [],
        users: []
    }

    find(key){
        return this.#storage[key]
    }

    findBookbyName(book){
        return this.#storage.books.find(b => b.name === book)
    }

    saveAuthor(author){
        this.#storage.authors.push(author)
    }

    saveBook(book){
        const book_exists = this.findBookbyName(book)
        if(!book_exists){
            this.#storage.books.push(book)
        } 
    }

    addBooksToStock(bookName,quantity){
        const book = this.findBookbyName(bookName)
        book?.addToStock(quantity)
    }

    removeBooksFromStocks(bookname,quantity){
        const book = this.findBookbyName(bookname)
        book?.removeFromStock(quantity)

    }

    findPosterByName(posterName) {
        return this.#storage.posters.find(p => p.name === posterName)
      }
    
      savePoster(poster) {
        const posterExists = this.findPosterByName(poster.name)
        if (!posterExists) [
          this.#storage.posters.push(poster)
        ]
      }
    
      addPostersToStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName)
        poster?.addToStock(quantity)
      }
    
      removePostersFromStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName)
        poster?.removeFromStock(quantity)
      }

      saveUser(user){
        const userExists = this.#storage.users.find(u => u.email === user.email)
        if (!userExists){
            this.#storage.users.push(user)
        }
      }

      saveOrder(order){
        this.#storage.orders.push(order)
      }
    
      showStorage() {
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data)) //retornando o metodo get da classe order
      }
}