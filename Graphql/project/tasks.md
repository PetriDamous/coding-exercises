## Server

* Add an updateSpeaker mutation to update a speaker
* When querying for a user that has been deleted or does not exist in the DB axios returns a 404 error.
    * If user cannot be found return a message telling the client user cannot be found.
* Break out tyeDefs and resolvers into own modules
    * look into making the schema executable.


## Client

* Add in additonal fields during speaker creation in speaker modal to add in remaining attributes.  Basically user can include twiter and other missing attributes when creating a speaker
* Add away to update a speaker.
    * make needed UI changes and add to UI
        * Might need an extra modal
        * Need extra button for update next to speaker.
* Create modal that shows speakers detail when speaker name is clicked on
    * This will use the query that queries for an individual speaker
    * We already have the speakers detail in cache so for the sake of learning and to use the extra query to get specific speaker data, we will have the modal run the speaker query to get the speaker details when the modal is opening like how we do at work.