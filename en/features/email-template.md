# Email Template

[[toc]]

## Add new email template

 Guest Post App provides built-in templates to help you compose emails much faster. These templates have all been meticulously handpicked to effectively boost your conversion rate.
 
 If you have no interest in built-in templates , you can also create your own by clicking the **Email Template** button at the top navigation.
 
 After that, fill in all the requested information and hit **Save**.

![Add email template](./../../assets/img/new-template.png)

Everything is now in place! From this point onward, you can use this template for any of your upcoming campaigns.

## How to personalize your email using Replace & Fakers

![Replacers & Fakers](./../../assets/img/replacers-fakers.png)

If increasing the email’s open and read rate is your priority, you should employ the **Replacers & Fakers** function to personalize the content to keep things from being repetitive and risk putting the reader off.

### What is Replacer?

To put it simply, **Replacer** serves as a tool that transforms a static code into dynamic content.

Guest Post App provides the following **Replacers**:

- `[receiver.first_name]`: Replace with the receiver’s name.
- `[receiver.email]`: Replace with the receiver’s email address.
- `[website.domain]`: Replace with the website domain’s name.
- `[website.crawled_url]`: Replace with the link that Guest Post App has crawled through the website.
- `[favorite-list.name]`: Replace with the favorite list’s name.
- `[random]`: Randomly select a value from [**Faker**](/en/features/email-template.html#what-is-faker).

For instance, you could paste this code after the `Hello` phrase.

`Hello [receiver.first_name],`

When sending the email, Guest Post App will replace `[receiver.first_name]` with the receiver’s name, turning the whole sentence to:

`Hello John,`

In case Guest Post App database does not contain a certain receiver's name, the above code will be displayed as

`Hello ,`

To avoid this situation, you can add a **fallback** value using the operator `||`

`Hello [receiver.first_name||there],`
 
With this, when there is no particular name to email address, the code will be shown as following:

`Hello there,`

:::warning Notice:
You can use `Replacers` in both subject and body of email.

`[random]` can only be used when combined with **Faker**. The following section will tell you what it is.
:::

### What is Faker?

Faker is a list of values, from which you can randomly pick one with the help of `[random]` replacer.

To create a new Faker, press the **Fakers** button at the top navigation, then fill in all the requested information.

![New Faker](./../../assets/img/new-faker.png)

:::warning Notice:
Each Faker value has to be on one single line.

Keep in mind the Code field: `topic` when creating a new Faker. This part will be necessary when working along with Replacer.
:::

**How to combine Faker with Replacer?**

**For example:** If you want to pitch three topics to a website in your guest post requesting email, you could combine **Faker** and **Replacer** as below. 

```
I'll be willing to write an article that will follow your content guidelines 
and will be suited for the best interest of your audiences.

I came upon some ideas.

- [random.topics]
- [random.topics]
- [random.topics]
```

Guest Post App will render to:

```
I'll be willing to write an article that will follow your content guidelines 
and will be suited for the best interest of your audiences.

I came upon some ideas.

- Review: Garnier Light Complete Body Lotion (Moisturizing Lotion)
- Best Minimalist Skincare Routine Guide: Routine with Just Three Steps that Works
- Best Minimalist Skincare Routine Guide: Routine with Just Three Steps that Works
```

:::tip
To avoid ending up with the same random values, you should add a lot of Faker values, or you can randomly extract the results from three Fakers instead of one as the example stated above.
:::
