const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
    result: [
        [
            "卫衣男 韩版 男士",
            "7.339320299539139"
        ],
        [
            "卫衣长款 中长款",
            "7.184275337370706"
        ],
        [
            "卫衣 秋季女",
            "7.190945569912859"
        ],
        [
            "卫衣女套头宽松 外套",
            "7.202113216731936"
        ],
        [
            "卫衣女 宽松 长袖",
            "7.200994854389539"
        ],
        [
            "卫衣女30-35岁",
            "7.168530393250248"
        ],
        [
            "卫衣夏套装",
            "7.201114678926225"
        ],
        [
            "卫衣男春秋大码",
            "7.334455423349713"
        ],
        [
            "卫衣女套头外套",
            "7.334918744891564"
        ],
        [
            "卫衣外套春",
            "7.334934721496455"
        ]
    ]
}

const get = (token) => {
    let data = db[token]

    if (data == null) {
        data = db[token] = clone(defaultData)
    }

    return JSON.stringify(data)
}

const add = (token, contact) => {
    if (!contact.id) {
        contact.id = Math.random().toString(36).substr(-8)
    }

    get(token).contacts.push(contact)

    return contact
}

const remove = (token, id) => {
    const data = get(token)
    const contact = data.contacts.find(c => c.id === id)

    if (contact) {
        data.contacts = data.contacts.filter(c => c !== contact)
    }

    return { contact }
}

module.exports = {
    get,
    add,
    remove
}
