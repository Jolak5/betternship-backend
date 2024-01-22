/**
 * @swagger
 * /v1/auth/signup:
 *   post:
 *     tags:
 *     - Auth
 *     description: Create a new user account
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             userName:
 *               type: string
 *               example: "userName"
 *             email:
 *               type: string
 *               example: "email@mail.com"
 *             password:
 *               type: string
 *               example: "password"
 *             confirmPassword:
 *               type: string
 *               example: "password"
 *     responses:
 *       201:
 *         description: User account is successfully created. Please verify your email to continue
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: string
 *               example: "1"
 *             message:
 *               type: string
 *               example: "User account is successfully created. Please verify your email to continue"
 *             data:
 *               type: object
 *               properties:
 *                 accountId:
 *                   type: string
 *                   example: "uuidv4"
 *       400:
 *         description: Error message
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: string
 *               example: "0"
 *             message:
 *               type: string
 *               example: "Error message"
 *       500:
 *         description: Error message
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: string
 *               example: "0"
 *             message:
 *               type: string
 *               example: "Error message"
 */

/**
 * @swagger
 * /v1/auth/login:
 *   post:
 *     description: Authenticate a user
 *     tags:
 *     - Auth
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             userName:
 *               type: string
 *               example: "userName"
 *             password:
 *               type: string
 *               example: "password"
 *     responses:
 *       200:
 *         description: Account sign-in successful
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: string
 *               example: "1"
 *             message:
 *               type: string
 *               example: "Account sign-in successful"
 *             token:
 *               type: string
 *               example: "jwtToken"
 *       401:
 *         description: Password is incorrect
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: string
 *               example: "2"
 *             message:
 *               type: string
 *               example: "Password is incorrect"
 *       400:
 *         description: Error message
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: string
 *               example: "0"
 *             message:
 *               type: string
 *               example: "Error message"
 *       500:
 *         description: Error message
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: string
 *               example: "0"
 *             message:
 *               type: string
 *               example: "Error message"
 */

/**
 * @swagger
 * /v1/auth/account/verify:
 *   post:
 *     tags:
 *     - Auth
 *     description: Verify a user's email
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             accountId:
 *               type: string
 *               example: "uuidv4"
 *       - name: otp
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *           example: "123456"
 *     responses:
 *       200:
 *         description: Account is successfully verified
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: string
 *               example: "1"
 *             message:
 *               type: string
 *               example: "Account is successfully verified!"
 *       400:
 *         description: Error message
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: string
 *               example: "0"
 *             message:
 *               type: string
 *               example: "Error message"
 *       500:
 *         description: Error message
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: string
 *               example: "0"
 *             message:
 *               type: string
 *               example: "Error message"
 */