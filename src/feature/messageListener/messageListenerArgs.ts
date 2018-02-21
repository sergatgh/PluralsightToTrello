/// <reference path="../../foundation/pipelines/commandPipelineArguments.ts" />

module Chrome.Messages {
    export class MessageListenerArgs extends Pipelines.CommandPipelineArguments {
        public static from(message: any, sender: chrome.runtime.MessageSender, sendResponse: (response: any) => void): MessageListenerArgs {
            return new MessageListenerArgs(message, sender, sendResponse);
        }

        private constructor(message: any, sender: chrome.runtime.MessageSender, sendResponse: (response: any) => void) {
            super();

            this.message = Monads.Some.wrapNull(message);
            this.sender = Monads.Some.wrapNull(sender);
            this.sendResponse = Monads.Some.wrapNull(sendResponse);
        }

        readonly message: Monads.Option<any>;
        readonly sender: Monads.Option<chrome.runtime.MessageSender>;
        readonly sendResponse: Monads.Option<(response: any) => void>;

        response: Monads.Option<any>;
    }
}