http://gist.io/4567190

<h2>Rules for good development from Sandi Metz</h2>

<h4>Sandi Metz’ rules for developers</h4>

 - Your class can be no longer than a hundred lines of code.  
 - Your methods can be no longer than five lines of code  
 - You can pass no more than four parameters and you can't just make it one big hash.  
 - In your controller, you can only instantiate one object, to do whatever it is that needs to be done.  
 - Your view can only know about one instance variable.  
 - Your Rails view should only send messages to that object i.e., no Demeter violations.[ "thunder dome principal". Translated: one model in, one model out! ]  
 - Rules are meant to be broken if by breaking them you produce better code. [ ...where "better code" is validated by explaining why you want to break the rule to someone else. ]  

<h4>Sandi Metz' rules of testing</h4>

- Make assertions about state for incoming messages.  
- Make assertions that you send outgoing messages. [Only do #2 for outgoing /command/ messages. Don't bother testing query methods at all, though you may need to stub those to make your tests work right.]  
- Ignore private methods.  
- Test roles. Make tests prove they are playing the correct role (and not just testing the mock / double)  
