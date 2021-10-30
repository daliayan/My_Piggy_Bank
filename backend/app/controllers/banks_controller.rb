class BanksController < ApplicationController

    before_action :made_bank, only: [:show, :destroy, :update]

    def index
        banks = Bank.all
        render json: banks, except: [:created_at, :updated_at]
    end

    def show 
        render json: @bank
    end

    def create
        bank = Bank.new(bank_params)
        if bank.save
            render json: bank
        else
            render json: bank.errors
        end
    end

    def update
        if @bank.update(bank_params)
            render json: bank
        else
            render json: bank.errors
        end
    end

    def destroy
        @bank.destroy
        render json: {message: "You've successfully deleted #{@bank.name} Piggy Bank"}
    end

    private

    def made_bank
        @bank = Bank.find_by_id(params[:id])
    end

    def bank_params
        params.require(:bank).permit(:name, :gender, :fund)
    end
end
