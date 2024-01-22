/**
 * @swagger
 * /v1/user/{userId}/education:
 *   get:
 *     tags:
 *     - Education
 *     description: Get all education records for a user
 *     parameters:
 *       - in: header
 *         name: authorization
 *         required: true
 *         type: string
 *         description: Bearer [token]
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User's unique ID
 *     responses:
 *       200:
 *         description: An array of education records
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Education'
 *       401:
 *         description: Unauthorized access
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /v1/user/{userId}/education:
 *   post:
 *     tags:
 *     - Education
 *     description: Add a new education record for a user
 *     parameters:
 *       - in: header
 *         name: authorization
 *         required: true
 *         type: string
 *         description: Bearer [token]
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User's unique ID
 *       - in: body
 *         name: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Education'
 *     responses:
 *       201:
 *         description: Education record created successfully
 *         schema:
 *           $ref: '#/definitions/Education'
 *       400:
 *         description: Invalid input data
 *       401:
 *         description: Unauthorized access
 */

/**
 * @swagger
 * /v1/user/{userId}/education/{educationId}/update:
 *   put:
 *     tags:
 *     - Education
 *     description: Update an education record for a user
 *     parameters:
 *       - in: header
 *         name: authorization
 *         required: true
 *         type: string
 *         description: Bearer [token]
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User's unique ID
 *       - in: path
 *         name: educationId
 *         required: true
 *         schema:
 *           type: string
 *         description: Education record's unique ID
 *       - in: body
 *         name: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Education'
 *     responses:
 *       200:
 *         description: Education record updated successfully
 *         schema:
 *           $ref: '#/definitions/Education'
 *       400:
 *         description: Invalid input data
 *       401:
 *         description: Unauthorized access
 *       404:
 *         description: Education record not found
 */

/**
 * @swagger
 * /v1/user/{userId}/education/{educationId}/delete:
 *   delete:
 *     tags:
 *     - Education
 *     description: Delete an education record for a user
 *     parameters:
 *       - in: header
 *         name: authorization
 *         required: true
 *         type: string
 *         description: Bearer [token]
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User's unique ID
 *       - in: path
 *         name: educationId
 *         required: true
 *         schema:
 *           type: string
 *         description: Education record's unique ID
 *     responses:
 *       200:
 *         description: Education record deleted successfully
 *       400:
 *         description: Invalid input data
 *       401:
 *         description: Unauthorized access
 *       404:
 *         description: Education record not found
 */

/**
 * @swagger
 * definitions:
 *   Education:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *         description: The unique identifier for the education record
 *       schoolName:
 *         type: string
 *         description: The name of the school
 *       titleOfDegree:
 *         type: string
 *         description: The title of the degree
 *       levelOfStudy:
 *         type: string
 *         description: The level of study
 *       degree:
 *         type: string
 *         description: The degree obtained
 *       fieldOfStudy:
 *         type: string
 *         description: The field of study
 *       graduationMonth:
 *         type: string
 *         description: The month of graduation
 *       graduationYear:
 *         type: string
 *         description: The year of graduation
 */