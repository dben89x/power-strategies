class RequestsController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :authenticate_user!
  skip_load_and_authorize_resource

  def create
    @request = Request.new(request_params)

    respond_to do |format|
      if @request.save
        NewRequestMailer.new_request_email(@request, 'doug@maxshermarketing.com').deliver_now
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
        NewRequestMailer.new_request_email(@request, 'doug@maxshermarketing.com').deliver_now

        format.json { render json: @request }
      else
        format.json { render json: @request.errors, status: :unprocessable_entity }
      end
    end
  end


  def request_params
    params.require(:request).permit(:type, :customer_profession, :customer_geography, :customer_income, :customer_interests, :email, :name, :company_name, :phone, :message, :preference)
  end
end
