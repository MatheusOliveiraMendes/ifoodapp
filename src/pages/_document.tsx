import Document, { Html, Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.jpeg" type="image/jpeg" />
                </Head>
                <body>
                    < Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}