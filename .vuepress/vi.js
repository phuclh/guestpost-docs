module.exports = [
    {
        title: "Tổng quan",
        collapsable: false,
        children: [
            'gioi-thieu',
            'quan-ly-team'
        ],
    }, {
        title: "Tính năng",
        collapsable: false,
        children: prefix('tinh-nang', [
            'tim-guest-post',
            'danh-sach-yeu-thich',
            'tai-khoan-email',
            'mau-email',
            'chien-dich'
        ]),
    }
]

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
