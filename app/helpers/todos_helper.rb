module TodosHelper
	def self.add_task(params)
  	return Todo.create(title: params[:task], active: true)
	end

	def self.update_task(params)
		p "i am in update module"
		@item = Todo.find(params[:item])
		p params[:item]
		p params[:active]
		@item.active = params[:active]
		return @item.save
	end
end
