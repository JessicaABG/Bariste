class CraftsController < ApplicationController
  before_action :set_craft, only: [:show, :update, :destroy]

  # GET /crafts
  def index
    @crafts = Craft.all

    render json: @crafts
  end

  # GET /crafts/1
  def show
    render json: @craft
  end

  # POST /crafts
  def create
    @craft = Craft.new(craft_params)

    if @craft.save
      render json: @craft, status: :created, location: @craft
    else
      render json: @craft.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /crafts/1
  def update
    if @craft.update(craft_params)
      render json: @craft
    else
      render json: @craft.errors, status: :unprocessable_entity
    end
  end

  # DELETE /crafts/1
  def destroy
    @craft.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_craft
      @craft = Craft.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def craft_params
      params.require(:craft).permit(:img_url, :about, :users, :comments)
    end
end
