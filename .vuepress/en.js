module.exports = [
    {
        title: "Getting Started",
        collapsable: false,
        children: [
            'introduction',
            'team-management'
        ],
    }, {
        title: "Features",
        collapsable: false,
        children: prefix('features', [
            'find-websites',
            'favorite-list',
            'email-account',
            'email-template',
            'campaign'
        ]),
    }
]

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
