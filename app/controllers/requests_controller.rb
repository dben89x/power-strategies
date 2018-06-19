class RequestsController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :authenticate_user!, raise: false
  skip_load_and_authorize_resource

  def create
    @request = Request.new(request_params)

    respond_to do |format|
      if @request.save
        NewRequestMailer.new_request_email(@request, ENV['MAIL_RECIPIENT']).deliver_now
        format.json { render json: @request }
      else
        format.json { render json: @request.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @request = Request.find(params[:id])

    respond_to do |format|
      if @request.update_attributes(request_params)
        NewRequestMailer.new_request_email(@request, ENV['MAIL_RECIPIENT']).deliver_now

        format.json { render json: @request }
      else
        format.json { render json: @request.errors, status: :unprocessable_entity }
      end
    end
  end


  def request_params
    params.require(:request).permit(:email, :name, :message)
  end
end
