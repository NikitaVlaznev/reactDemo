// Node
const chai = require('chai')
const chaiHttp = require('chai-http')

const should = chai.should()
const serverURL = 'http://localhost:3000'
chai.use(chaiHttp)

describe('companiesAPI', () => {
    it('Корректное получение списка компаний', (done) => {
        chai.request(serverURL)
            .get('/mock/companies/companies.json')
            .send({query: '', categories: []})
            .end((err, res) => {                
                res.body.content.should.be.a('array')
                res.body.totalPages.should.be.a('number')
                res.body.totalElements.should.be.a('number')
                res.body.size.should.be.a('number')
                res.body.number.should.be.a('number')
                done()
            })
    })
    
    it('Ошибочный ответ сервера', (done) => {
        chai.request(serverURL)
            .get('/wrong-url')
            .send({query: '', categories: []})
            .end((err, res) => {                
                res.body.should.be.empty                
                done()
            })
    })    
})