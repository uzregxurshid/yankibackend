/* eslint-disable no-console */
const mailer = require('../index')
const FirstMessage = (add) => {
    mailer
        .NewMessage(
            add,
            `
   <!DOCTYPE html>
<html>

  <head>
    <meta charset="UTF-8">
    <title>Tailwind 2 generator example page</title>

    <meta charset="utf-8">
    <meta name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">
  </head>

  <body>
    <section class="text-black dark:text-white body-font lg:pt-10">
      <div class="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
        <div class="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1
            class="mb-2 text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 dark:text-white dark:text-white lg:text-8xl md:text-4xl">
            <span>Thank you</span>
            <br class="hidden lg:block">For Subscription
          </h1>
          <p
            class="mx-auto text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
            Our shop glad to see you as our new customer.
          </p>
        </div>
        <div class="flex lg:justify-center mt-5">
          <img loading="lazy" class="object-cover object-center rounded-lg "
            alt="hero"
            src="https://raw.githubusercontent.com/Frontenda/images/master/builder-3d_sm.png">
        </div>
        <div class="flex mt-4 mb-6 md:justify-center">
          <button
            class="px-12 py-4 mt-5 font-semibold text-white d transition duration-500 ease-in-out transform rounded-full shadow-xl bg-gradient-to-r from-blue-500 to-blue-700 font-lg hover:from-blue-500 hover:to-indigo-900 focus:shadow-outline focus:outline-none lg:mr-4">
            Visit our shop
          </button>
        </div>
       
      </div>
    </section>


  </body>

</html>
`
        )
        .then((info) => {
            console.log(info)
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = {
    FirstMessage,
}
