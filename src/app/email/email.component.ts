import { Component } from '@angular/core';

@Component({
    selector: 'app-email',
    template: `
        <div class="footer-content">
            <h2 class="title">Contact Us</h2>
            <div class="alert alert-success hidden" id="MessageSent2">
                We have received your message, we will contact you very soon.
            </div>
            <div class="alert alert-danger hidden" id="MessageNotSent2">
                Oops! Something went wrong please refresh the page and try again.
            </div>
            <form role="form" id="footer-form" class="margin-clear">
                <div class="form-group has-feedback mb-10">
                    <label class="sr-only" for="name2">Name</label>
                    <input type="text" class="form-control" id="name2" placeholder="Name" name="name2">
                    <i class="fa fa-user form-control-feedback"></i>
                </div>
                <div class="form-group has-feedback mb-10">
                    <label class="sr-only" for="email2">Email address</label>
                    <input type="email" class="form-control" id="email2" placeholder="Enter email" name="email2">
                    <i class="fa fa-envelope form-control-feedback"></i>
                </div>
                <div class="form-group has-feedback mb-10">
                    <label class="sr-only" for="message2">Message</label>
                    <textarea class="form-control" rows="4" id="message2" placeholder="Message" name="message2"></textarea>
                    <i class="fa fa-pencil form-control-feedback"></i>
                </div>
                <input type="submit" value="Send" class="margin-clear submit-button btn btn-default">
            </form>
        </div>
    `,
    styles: [`

    `]
})

export class EmailComponent {
  title = 'app works!';
}
