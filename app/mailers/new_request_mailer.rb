class NewRequestMailer < ApplicationMailer
  def new_request_email(request, email)
    @request = request
    mail(to: email, subject: "New request from #{@request.name}")
  end

end
