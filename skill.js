const Alexa = require('ask-sdk');

// Define intent handlers
const EmergencyIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
               handlerInput.requestEnvelope.request.intent.name === 'EmergencyIntent';
    },
    handle(handlerInput) {
        const speechText = 'Emergency detected. Help is on the way!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Emergency Alert', speechText)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
               handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'You can say help if you need help!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
               handlerInput.requestEnvelope.request.intent.name === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speechText = 'Sorry, I didn\'t understand that. Please try again.';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.getResponse();
    }
};

// Export the skill
const skillBuilder = Alexa.SkillBuilders.custom();

module.exports = skillBuilder
    .addRequestHandlers(
        EmergencyIntentHandler,
        HelpIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler
    )
    .create();
