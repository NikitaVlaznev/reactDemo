// Node
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../../../server')
const should = chai.should()
chai.use(chaiHttp)

describe('companiesAPI', () => {
    it('Корректное получение списка компаний', (done) => {
        chai.request(server)
            .get('/companies')
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
        chai.request(server)
            .get('/wrong-url')
            .send({query: '', categories: []})
            .end((err, res) => {                
                res.body.should.be.empty                
                done()
            })
    })    
})

server.close()